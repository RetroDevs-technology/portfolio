import axios from 'axios'

const token = import.meta.env.VITE_DIRECTUS_TOKEN

const baseUrl = import.meta.env.VITE_DIRECTUS_BASE_URL

const projectId = import.meta.env.VITE_DIRECTUS_PROJECT_ID

export interface CreateContactData {
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  projectId: Project
}

/** Payload for creating a contact; projectId is the relation ID (string). */
export interface CreateContactPayload {
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

export interface Project {
  id: string
  name: string
  logo: string
  url: string
  date_created: string
  user_created: string
  date_updated: string
  user_updated: string
  start_date: string
  end_date: string
  clientId: string
  sort: string | null
  status: string | null
}

export interface DirectusFile {
  id: string
  storage: string
  filename_disk: string
  filename_download: string
  title: string
  type: string
  filesize: number
  uploaded_by: string
  uploaded_on: string
  modified_by: string
  modified_on: string
  charset: string
  folder: string | null
  width: number | null
  height: number | null
  duration: number | null
  description: string | null
  location: string | null
  tags: string[] | null
  metadata: Record<string, any> | null
}

interface DirectusResponse<T> {
  data: T
  meta: {
    total_count: number
  }
}

export interface PaginationInfo {
  hasNextPage: boolean
  hasPrevPage: boolean
  currentPage: number
  totalPages: number
  totalCount: number
}

function getPaginationInfo(
  currentPage: number,
  totalCount: number,
  perPage: number,
): PaginationInfo {
  const totalPages = Math.ceil(totalCount / perPage)
  const hasNextPage = currentPage < totalPages - 1
  const hasPrevPage = currentPage > 0

  return {
    hasNextPage,
    hasPrevPage,
    currentPage,
    totalPages,
    totalCount,
  }
}

class DirectusService {
  public baseUrl = baseUrl
  private token = token

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.token}`,
    }
  }

  private async getFileUrl(fileId: string | null): Promise<string | null> {
    if (!fileId) return null
    return `${this.baseUrl}/assets/${fileId}?access_token=${this.token}`
  }

  public async createContact(data: CreateContactPayload) {
    return await axios.post(`${this.baseUrl}/items/contacts`, { ...data, projectId }, {
      headers: this.getHeaders(),
    }).then((res) => res.data)
      .catch((err) => {
        console.log(err)
        throw err
      })
  }

  public async getFile(fileId: string): Promise<DirectusFile | null> {
    try {
      const response = await axios.get<{ data: DirectusFile }>(
        `${this.baseUrl}/files/${fileId}`,
        {
          headers: this.getHeaders(),
        },
      )
      return response.data.data
    } catch (err) {
      console.error(`Error fetching file: ${err}`)
      return null
    }
  }

  public async downloadFile(fileId: string): Promise<ArrayBuffer | null> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/assets/${fileId}?access_token=${this.token}`,
        {
          headers: this.getHeaders(),
          responseType: 'arraybuffer',
        },
      )
      return response.data
    } catch (err) {
      console.error(`Error downloading file: ${err}`)
      return null
    }
  }

  public getFileDownloadUrl(fileId: string): string {
    return `${this.baseUrl}/assets/${fileId}?access_token=${this.token}`
  }
}

export default new DirectusService()
