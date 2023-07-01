export interface IPost {
  id: string
  title: string
  date: string
  duration: string
}

export interface IPostData {
  id: string
  contentHtml: string
  title: string
  date: string
  duration: string
}

export interface IProject {
  name: string
  description: string
  icon: string
  repo: string
}

export interface ITimelineData {
  contentHtml: string
  title: string
  date: string
}

export default interface IImage {
  date: string
  src: string
  width: number
  height: number
  alt: string
}

export interface IWave {
  address: string,
  timestamp: Date,
  message: string
}
