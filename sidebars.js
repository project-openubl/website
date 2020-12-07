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
  ],
  xbuilder: [
    "xbuilder/index",
    {
      type: "category",
      label: "Java library",
      items: [
        "xbuilder/library/installation",
        "xbuilder/library/gettingStarted",
        "xbuilder/library/concepts",
        "xbuilder/library/createXml",
        "xbuilder/library/signXml",
        {
          type: "category",
          label: "Perú",
          items: [
            "xbuilder/library/peru/supportedDocs",
            "xbuilder/library/peru/invoice",
            "xbuilder/library/peru/creditNote",
            "xbuilder/library/peru/debitNote",
            "xbuilder/library/peru/voidedDocument",
            "xbuilder/library/peru/summaryDocument",
            "xbuilder/library/peru/igv",
            "xbuilder/library/peru/icb",
            "xbuilder/library/peru/sellingPrice",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Standalone server",
      items: [
        "xbuilder/server/introduction",
        "xbuilder/server/installation",
        "xbuilder/server/gettingStarted",
        "xbuilder/server/createXml",
        "xbuilder/server/signXml",
        "xbuilder/server/configuration",
        "xbuilder/server/api",
      ],
    },
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
  ],
};
