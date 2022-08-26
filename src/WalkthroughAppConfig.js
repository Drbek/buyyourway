const WalkthroughAppConfig = {
  onboardingConfig: {
    walkthroughScreens: [
      {
        icon: require("../assets/loan.png"),
        title: "Vendez à crédit",
        description: "Vendez des articles/marchandises à vos clients et soyez payé au fur et à mesure",
      },
      {
        icon: require("../assets/score.png"),
        title: "Mésurer la confiance",
        description:
          "A travers le crédit score du client, vous pouvez decider de vendre à crédit ou pas selon que le score est bas ou haut",
      },
      {
        icon: require("../assets/bell.png"),
        title: "Notifications",
        description: "Recevez les alertes sur les échances de remboursements.",
      },
    ],
  },
};

export default WalkthroughAppConfig;
