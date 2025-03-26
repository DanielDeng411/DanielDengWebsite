// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
  {
    company: 'Shenyou Technology Company',
    title: 'Test Assistant Intern',
    logo: 'coffee', 
    start: '2023-07',
    end: '2023-10',
  },
  {
    company: 'Zhongshenhua Accounting Firm',
    title: 'Auditing Assistant Intern',
    logo: 'bank',
    start: '2023-02',
    end: '2023-03',
  }
]
