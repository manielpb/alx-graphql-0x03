import { gql } from "@apollo/client";
import next from "next";
import { pages } from "next/dist/build/templates/app-page";

export const GET_EPISODES = gql`
    query GET_EPISODES($page: Int, $filter: FilterEpisode) {
        episodes(page: $page, filter: $filter) {
            info {
                pages
                next
                prev
                count
            }
            results {
                id
                name
                air_date
                episode
            }
        }
    }

`;

