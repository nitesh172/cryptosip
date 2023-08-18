const newAirdrop = [
  {
    id: 1,
    name: "BTC",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, perspiciatis voluptas. Doloribus non velit autem maxime ut quod, soluta voluptate perferendis accusantium culpa iusto adipisci quia tempore. Saepe, deserunt vel.",
    image: "",
    socialLinks: {
      twitter: "https://twitter.com/Bitcoin",
      telegram: "",
      facebook: "",
      instagram: "",
      discord: "",
      airdropsite: "",
    },
    userParticipate: 10,
    startDate: new Date().getDate(),
    endDate: new Date().getDay(),
    status: "Active",
    steps: [
      {
        stepNumber: 1,
        stepName: "Get Metamask address",
        stepDescription:
          "You need to have metamask installed in your browser and you should be logged",
        images: [{ url: "/images/airdrops/metamask.png", poolOrder: 0 }],
      },
    ],
  },
]

export default {
  newAirdrop,
}
