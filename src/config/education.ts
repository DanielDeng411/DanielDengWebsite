
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Algonquin College',
      major: 'Computer Programming',
      logo: 'college',
      start: '2024',
      end: 'Present'
    },
    {
      school: 'Nanjing Auditing University',
      major: 'Auditing',
      logo: 'college',
      start: '2019',
      end: '2023'
    },
  ]