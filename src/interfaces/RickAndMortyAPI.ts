import { Episode } from "./Episode";
import { Info } from "./Info";

export interface RickAndMortyAPI {
    info: Info;
    results: Episode[];
}