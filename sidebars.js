module.exports = {
  xbuilder: [
    {
      type: "category",
      label: "Padre1",
      items: ["xbuilder/index"],
    },
    {
      type: "category",
      label: "Padre2",
      items: ["doc2"],
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
