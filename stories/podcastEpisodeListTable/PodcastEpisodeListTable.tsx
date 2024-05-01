import React from 'react';
import './podcastEpisodeListTable.scss';

interface TableRow {
 title: string;
 url: string;
 date: string;
 duration: string;
}

interface PodcastEpisodeListTableProps {
 rows: TableRow[];
}

const PodcastEpisodeListTable: React.FC<PodcastEpisodeListTableProps> = ({ rows }) => {
 return (
    <table className="podcast-episode-list-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Fechas</th>
          <th>Duración</th>
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
 );
};

export default PodcastEpisodeListTable;
