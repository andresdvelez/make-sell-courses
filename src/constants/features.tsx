// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FEATURES = (t: (key: string) => string) => {
  return [
    {
      id: 1,
      icon: (
        <i
          className="icon-[mingcute--asterisk-2-fill] text-purple-300 text-[120px] rotate-45"
          role="img"
          aria-hidden="true"
        ></i>
      ),
      title: "Personal touch",
      description:
        "We understand that every person is unique and has their own needs and talent",
    },
    {
      id: 2,
      icon: (
        <i
          className="icon-[iconoir--snow-flake] text-green-200 text-[120px]"
          role="img"
          aria-hidden="true"
        ></i>
      ),
      title: "Personal touch",
      description:
        "We understand that every person is unique and has their own needs and talent",
    },
    {
      id: 3,
      icon: (
        <i
          className="icon-[fluent--shape-organic-24-filled] text-purple-300 text-[120px] rotate-90"
          role="img"
          aria-hidden="true"
        ></i>
      ),
      title: "Personal touch",
      description:
        "We understand that every person is unique and has their own needs and talent",
    },
  ];
};
