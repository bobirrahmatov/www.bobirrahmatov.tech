import { Project } from "@/types/personal-projects";

const PER_PAGE = 50;

export const fetchProjects = async (page: number = 0) => {
  const projects: Project[] = [];

  const req = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${process.env.RAINDROP_COLLECTION_PROJECTS}?perpage=${PER_PAGE}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  );

  const data = await req.json();

  projects.push(...data.items.map(
    ({ cover, title, link, tags }) => ({
      link,
      title,
      cover,
      tags,
    })
  ));

  if (data.items.length === PER_PAGE) {
    projects.push(...await fetchProjects(page + 1));
  }

  return projects;
}