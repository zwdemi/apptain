export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "637adf9afb9a7031609976ea",
                  title: "Sanity Studio",
                  name: "apptain-studio",
                  apiId: "8de45674-4ecf-4a77-971e-41bf9f198c76",
                },
                {
                  buildHookId: "637adf9a05fb0439f9a83e44",
                  title: "Blog Website",
                  name: "apptain-web",
                  apiId: "3b3f265c-6204-4aac-b79e-ae1efc2573db",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/zwdemi/apptain",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://apptain-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
