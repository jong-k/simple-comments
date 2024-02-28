import { useSelectOptions } from "./useSelectOptions";

export default function TravelContainer() {
  // 비슷한 useEffect 구조의 중복성을 피하기 위해 커스텀 훅 사용
  const {
    list: planetList,
    selectedId: planetId,
    setSelectedId: setPlanetId,
  } = useSelectOptions("/planets");

  const {
    list: placeList,
    selectedId: placeId,
    setList: setPlaceList,
    setSelectedId: setPlaceId,
  } = useSelectOptions(planetId ? `/planets/${planetId}/places` : null);

  return (
    <>
      <label>
        Pick a planet:{" "}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
            // planet 이 바뀌면 place 정보 리셋
            setPlaceId("");
            setPlaceList([]);
          }}
        >
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{" "}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || "???"} on {planetId || "???"}{" "}
      </p>
    </>
  );
}
