import React from 'react';
import './podcastEpisodeListTable.scss';

export type TableRow = {
 title: string;
 url: string;
 date: string;
 duration: string;
}

type PodcastEpisodeListTableProps = {
 rows: TableRow[];
}

const PodcastEpisodeListTable: React.FC<PodcastEpisodeListTableProps> = ({ rows }) => {
 return (
    <div className="podcast-episode-list">
      <table className="podcast-episode-list-table">
        <thead>
          <tr>
            <th className='title'>Título</th>
            <th className='date'>Fechas</th>
            <th className='duration'>Duración</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className='row-title'><a href={row.url}>{row.title}</a></td>
              <td className='row-date'>{row.date}</td>
              <td className='row-duration'>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default PodcastEpisodeListTable;
