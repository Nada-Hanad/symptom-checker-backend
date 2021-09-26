import axios from "axios";
import { Request, Response } from "express";

export const getGloabalData = (req: Request, res: Response) => {
  axios
    .get("https://disease.sh/v3/covid-19/historical/all")
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get charts' data.", error: err });
    });
};

export const getMapData = (req: Request, res: Response) => {
  axios
    .get("https://disease.sh/v3/covid-19/countries")
    .then((response) => {
      response.data = response.data.map((e: any) => {
        return { country: e.countryInfo?.iso2, value: e.cases };
      });
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Can't get map's data.", error: err });
    });
};

export const getDataByCountry = (req: Request, res: Response) => {
  var iso = req.query.iso;
  axios
    .get(`https://disease.sh/v3/covid-19/historical/${iso}`)
    .then((response) => {
      res.json(response.data.timeline);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Can't get data by country", error: err });
    });
};

export const getVaccinationData = (req: Request, res: Response) => {
  axios
    .get("https://disease.sh/v3/covid-19/vaccine/coverage")
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Can't get vaccination's data.", error: err });
    });
};

export const getVaccByCountry = (req: Request, res: Response) => {
  var iso = req.query.iso;
  axios
    .get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${iso}`)
    .then((response) => {
      res.json(response.data.timeline);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Can't get vaccination data by country", error: err });
    });
};

export const getTherapeuticsData = (req: Request, res: Response) => {
  axios
    .get("https://disease.sh/v3/covid-19/therapeutics")
    .then((response) => {
      res.json(response.data.data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Can't get therapeutic' data.", error: err });
    });
};
