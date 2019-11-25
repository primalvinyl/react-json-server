import React from 'react';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import styles from '../../styles/react-table.css';

const TablePage = (props) => {
    const columns = [
        {
            Header: 'Order',
            accessor: 'Order',
            id: 'Order',
            show: false
        },
        {
            accessor: 'ID',
            id: 'ID',
            Cell: row => <img src={`https://clientupdate-v6.cursecdn.com/GameAssets/${row.value}/Icon64.png`} />
        },
        {
            Header: 'Name',
            accessor: 'Name',
            id: 'Name',
            Cell: row => <Link to={`/${row.original.Slug}`}>{row.value}</Link>
        },
        {
            Header: 'Supports Addons',
            accessor: 'SupportsAddons',
            id: 'SupportsAddons',
            Cell: row => row.value && 'Yes' || 'No'
        }
    ];
    return (
        <div className="game-list">
            <ReactTable
                data={props.games}
                columns={columns}
                loading={props.ui.isLoading}
                defaultSorted={[
                    { id: 'Order', desc: true },
                    { id: 'Name', desc: false }
                ]}
            />
        </div>
    );
}

export default TablePage;
