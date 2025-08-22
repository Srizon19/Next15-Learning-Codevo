export const blogs = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post #${i + 1}`,
  author: `Author ${(i % 10) + 1}`,
  summary: `This is a summary of blog post number ${i + 1}.`,
  reviews: Array.from({ length: 5 }, (_, j) => ({
    id: j + 1,
    content: `This is review ${j + 1} for blog post ${i + 1}.`,
    reviewer: `Reviewer ${(j % 5) + 1}`,
  })),
}));
