module.exports = {
  docs: [
    {
      type: "category",
      label: "Project OpenUBL",
      items: ["introduction", "design-principles", "contributing"],
    },
    {
      type: "category",
      label: "Librerías Java",
      collapsed: false,
      items: ["java-library-xbuilder", "java-library-xsender"],
    },
    {
      type: "category",
      label: "Consulta RUC",
      collapsed: false,
      items: ["consulta-ruc"],
    },
  ],
  xbuilder: [
    "xbuilder/index",
    "xbuilder/installation",
    "xbuilder/concepts",
    "xbuilder/createXml",
    "xbuilder/signXml",
    {
      type: "category",
      label: "Ejemplos",
      items: [
        "xbuilder/ejemplos/invoice",
        "xbuilder/ejemplos/creditNote",
        "xbuilder/ejemplos/debitNote",
        "xbuilder/ejemplos/voidedDocument",
        "xbuilder/ejemplos/summaryDocument",
        "xbuilder/ejemplos/igv",
        "xbuilder/ejemplos/icb",
        "xbuilder/ejemplos/sellingPrice",
      ],
    },
    "xbuilder/qa",
  ],
  xsender: [
    "xsender/index",
    {
      type: "category",
      label: "Java library",
      items: [
        "xsender/library/installation",
        "xsender/library/gettingStarted",
        "xsender/library/smartSend",
        {
          type: "category",
          label: "BillService",
          items: [
            "xsender/library/billService/sendBill",
            "xsender/library/billService/sendSummary",
            "xsender/library/billService/getStatus",
          ],
        },
        {
          type: "category",
          label: "BillConsultService",
          items: [
            "xsender/library/billConsultService/getStatus",
            "xsender/library/billConsultService/getStatusCrd",
          ],
        },
        {
          type: "category",
          label: "BillValidService",
          items: ["xsender/library/billValidService/getStatus"],
        },
      ],
    },
    {
      type: "category",
      label: "Standalone server",
      items: ["xsender/server/installation"],
    },
    "xsender/codigosErrorSunat",
  ],
  searchpe: [
    "searchpe/index",
    {
      type: "category",
      label: "Instalación",
      items: [
        "searchpe/installation-docker",
        "searchpe/installation-docker-compose",
        "searchpe/installation-so",
      ],
    },
    "searchpe/uso",
    "searchpe/api",
  ],
};
