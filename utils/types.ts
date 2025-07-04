export type SuccessPageProps = {
  imageUrl: string;
  heading: string;
  text: string;
  btnText: string;
  link: string;
};

export type Subscription = {
  plan: string;
  description: string;
  planType: [
    {
      name: string;
      price: string;
      perMonth: string;
    },
    {
      name: string;
      price: string;
      perMonth: string;
    },
    {
      name: string;
      price: string;
      perMonth: string;
    },
  ];
};

export type SubscriptionType = Subscription[]
