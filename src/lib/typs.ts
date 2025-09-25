import { JSX } from "react";

export type linksType = {
    id : string;
  name: string;
  href: string;
};

export type socialLinksType = {
    id : string;
  icon: JSX.Element;
  href: string;
};

export type servicesType ={
    id : string;
    num : string;
    name : string;
    description : string;
}

type AboutInfoItem = {
  id: string;
  title: string;
  value: string;
};

export type AboutInfoType = {
  name: string;
  description: string;
  info: AboutInfoItem[];
};

type ExperienceItem = {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
};

export type ExperiencesType = {
  icon: string;
  title: string;
  description: string;
  items: ExperienceItem[];
};

type courcesItem = {
        id: string;
        inistitution: string;
        degree: string;
        duration: string;
    };

export type courcesType = {
    icon: string;
    title: string;
    description: string;
    items: courcesItem[];
};

type skillItem = {
        id: string;
        icon: JSX.Element;
        name: string;
    };

export type skillsType = {
    title: string;
    description: string;
    items: skillItem[];
}

type stackItems = {
  id : string ; 
  name : string
}

export type projectsType = {
    id: string;
    num: string;
    category: string;
    title: string;
    description: string;
    stack: stackItems[];
    image : string;
    live : string;
    github : string
  }

 export type contectInfoType = {
    id: string;
    icon: React.JSX.Element;
    title: string;
    description: string;
}