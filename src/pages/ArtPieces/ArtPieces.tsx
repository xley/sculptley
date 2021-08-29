import { Route } from "react-router-dom";
import { LostCity } from "../../art/LostCity/LostCity";
import ArtPiece from "./ArtPiece/ArtPiece";

const artPieces = [LostCity];

function ArtPieces() {
  return (
    <>
      {artPieces.map((art) => {
        return (
          <Route path={`/art/${art.route}`}>
            <ArtPiece key={art.route} art={art} />
          </Route>
        );
      })}
    </>
  );
}

export default ArtPieces;
