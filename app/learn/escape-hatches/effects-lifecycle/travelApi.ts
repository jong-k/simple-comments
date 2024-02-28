export interface Item {
  id: string;
  name: string;
}

export const fetchData = (url: string) => {
  if (url === "/planets") {
    return fetchPlanets();
  } else if (url.startsWith("/planets/")) {
    // TODO: 정규식 해석
    // ^\/planets\/ : /planets/ 로 시작
    // [\w-]+ : 알파벳, 숫자, 언더바 에다가 하이픈까지 포함하는 하나 이상의 임의의 문자열
    // (\/)? : / 가 있거나 없거나
    const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
    if (!match || !match[1] || !match[1].length) {
      throw Error(
        'Expected URL like "/planets/earth/places". Received: "' + url + '".',
      );
    }
    return fetchPlaces(match[1]);
  } else
    throw Error(
      'Expected URL like "/planets" or "/planets/earth/places". Received: "' +
        url +
        '".',
    );
};

const fetchPlanets = async () => {
  return new Promise<Item[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "earth",
          name: "Earth",
        },
        {
          id: "venus",
          name: "Venus",
        },
        {
          id: "mars",
          name: "Mars",
        },
      ]);
    }, 1000);
  });
};

const fetchPlaces = async (planetId: string) => {
  if (typeof planetId !== "string") {
    throw Error(
      "fetchPlaces(planetId) expects a string argument. " +
        "Instead received: " +
        planetId +
        ".",
    );
  }
  return new Promise<Item[]>((resolve) => {
    setTimeout(() => {
      if (planetId === "earth") {
        resolve([
          {
            id: "laos",
            name: "Laos",
          },
          {
            id: "spain",
            name: "Spain",
          },
          {
            id: "vietnam",
            name: "Vietnam",
          },
        ]);
      } else if (planetId === "venus") {
        resolve([
          {
            id: "aurelia",
            name: "Aurelia",
          },
          {
            id: "diana-chasma",
            name: "Diana Chasma",
          },
          {
            id: "kumsong-vallis",
            name: "Kŭmsŏng Vallis",
          },
        ]);
      } else if (planetId === "mars") {
        resolve([
          {
            id: "aluminum-city",
            name: "Aluminum City",
          },
          {
            id: "new-new-york",
            name: "New New York",
          },
          {
            id: "vishniac",
            name: "Vishniac",
          },
        ]);
      } else throw Error("Unknown planet ID: " + planetId);
    }, 1000);
  });
};
