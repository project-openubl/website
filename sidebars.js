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
        "xsender/installation",
        "xsender/gettingStarted",
        "xsender/smartSend",
        {
          type: "category",
          label: "BillService",
          items: [
            "xsender/billService/sendBill",
            "xsender/billService/sendSummary",
            "xsender/billService/getStatus",
          ],
        },
        {
          type: "category",
          label: "BillConsultService",
          items: [
            "xsender/billConsultService/getStatus",
            "xsender/billConsultService/getStatusCrd",
          ],
        },
        {
          type: "category",
          label: "BillValidService",
          items: ["xsender/billValidService/getStatus"],
        },
      ],
    },
  ],
};
