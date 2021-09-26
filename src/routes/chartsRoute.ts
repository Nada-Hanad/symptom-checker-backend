import { Router } from "express";
import {
  getGloabalData,
  getMapData,
  getDataByCountry,
  getVaccinationData,
  getVaccByCountry,
  getTherapeuticsData,
} from "../controllers/chartsDataController";

const initRouter = (router: Router) => {
  router.route("/global").get(getGloabalData);
  router.route("/map").get(getMapData);
  router.route("/data-by-country").get(getDataByCountry);
  router.route("/vaccination").get(getVaccinationData);
  router.route("/vacc-by-country").get(getVaccByCountry);
  router.route("/therapeutics").get(getTherapeuticsData);
};

export default initRouter;
