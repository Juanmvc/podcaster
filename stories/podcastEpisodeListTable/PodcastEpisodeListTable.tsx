import React from "react";
import classes from "./podcastEpisodeListTable.module.scss";

const MODULE_PREFIX = "podcast-episode-list";

export type TableRow = {
  title: string;
  url: string;
  date: string;
  duration: string;
};

type PodcastEpisodeListTableProps = {
  rows: TableRow[];
};

const PodcastEpisodeListTable: React.FC<PodcastEpisodeListTableProps> = ({
  rows,
}) => {
  return (
    <div className={classes[MODULE_PREFIX]}>
      <table className={classes[`${MODULE_PREFIX}__table`]}>
        <thead>
          <tr>
            <th className={classes[`${MODULE_PREFIX}__table__title`]}>
              Título
            </th>
            <th className={classes[`${MODULE_PREFIX}__table__date`]}>Fechas</th>
            <th className={classes[`${MODULE_PREFIX}__table__duration`]}>
              Duración
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? classes[`${MODULE_PREFIX}__table__even-row`]
                  : classes[`${MODULE_PREFIX}__table__odd-row`]
              }
            >
              <td className={classes[`${MODULE_PREFIX}__table__row-title`]}>
                <a href={row.url}>{row.title}</a>
              </td>
              <td className={classes[`${MODULE_PREFIX}__table__row-date`]}>
                {row.date}
              </td>
              <td className={classes[`${MODULE_PREFIX}__table__row-duration`]}>
                {row.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PodcastEpisodeListTable;
