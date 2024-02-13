import { QueryParameter, DuneClient } from "@cowprotocol/ts-dune-client";
const { DUNE_API_KEY } = process.env;

const duneClient = new DuneClient(DUNE_API_KEY ?? "");

export default duneClient