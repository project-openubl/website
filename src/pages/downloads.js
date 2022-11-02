import * as React from "react";
import { ExternalLink, Link, Download } from "react-feather";

const DownloadsPage = () => {
  const libraries = [
    {
      title: "XBuilder",
      description: "Maven o Gradle",
      downloadURL:
        "https://mvnrepository.com/artifact/io.github.project-openubl/xbuilder",
    },
    {
      title: "XSender",
      description: "Maven o Gradle",
      downloadURL:
        "https://mvnrepository.com/artifact/io.github.project-openubl/xsender",
    },
  ];

  const applications = [
    {
      title: "Searchpe",
      description: "Para Contenedores o Java",
      downloadURL: "https://github.com/project-openubl/searchpe/releases",
      containerImage:
        "https://quay.io/repository/projectopenubl/searchpe?tab=tags",
    },
    {
      title: "Ublhub",
      description: "Para Contenedores o Java",
      downloadURL: "https://github.com/project-openubl/ublhub/releases",
      containerImage:
        "https://quay.io/repository/projectopenubl/ublhub?tab=tags",
    },
  ];

  const quickstarts = [
    {
      title: "Quickstarts",
      description: "Empieza a experimentar descargando el repositorio",
      url: "https://github.com/project-openubl/openubl-quickstarts",
    },
  ];

  return (
    <div className="bg-white">
      <section class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Downloads</h1>
        </div>
      </section>

      <section>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Librerias</h1>
          <div class="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div class="relative overflow-auto">
              <table class="table-auto w-full">
                <tbody className="">
                  {libraries.map((element, index) => (
                    <tr key={index} className="border">
                      <td className="text-2xl p-2">{element.title}</td>
                      <td className="text-1xl">{element.description}</td>
                      <td>
                        <a
                          className="flex hover:underline"
                          href={element.downloadURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink />
                          &nbsp;Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Microservicios</h1>
          <div class="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div class="relative overflow-auto">
              <table class="table-auto w-full">
                <tbody className="">
                  {applications.map((element, index) => (
                    <tr key={index} className="border">
                      <td className="text-2xl p-2">{element.title}</td>
                      <td className="text-1xl">{element.description}</td>
                      <td>
                        <a
                          className="flex hover:underline"
                          href={element.downloadURL}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Download />
                          &nbsp;Download
                        </a>
                      </td>
                      <td>
                        <a
                          className="flex hover:underline"
                          href={element.containerImage}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Link />
                          &nbsp;Registry
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Quickstarts</h1>
          <div class="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div class="relative overflow-auto">
              <table class="table-auto w-full">
                <tbody className="">
                  {quickstarts.map((element, index) => (
                    <tr key={index} className="border">
                      <td className="text-2xl p-2">{element.title}</td>
                      <td className="text-1xl">{element.description}</td>
                      <td>
                        <a
                          className="flex hover:underline"
                          href={element.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink />
                          &nbsp;Repositorio
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadsPage;
