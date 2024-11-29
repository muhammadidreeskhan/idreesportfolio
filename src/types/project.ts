export type Technology = {
  name: string;
  color: string;
};

export type Project = {
  title: string;
  description: string;
  tech: Technology[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  featured?: boolean;
};
