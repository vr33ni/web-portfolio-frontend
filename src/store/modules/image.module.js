import axios from "axios";
import dataSync from "../helper/dataSync";

export default {
  namespaced: true,
  modules: { items: dataSync('prof/img')}
};