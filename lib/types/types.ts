export type announcementType = {
  id: string;
  announcement: string;
  link: string;
  description: string;
};

export type courseType = {
  id: string;
  course: string;
  description: string;
  title: string;
  prerequisites: string;
  corequisites: string;
  hours: string;
  inclass: string;
  outclass: string;
};
