import Pagination from 'react-bootstrap/Pagination';

const ArticlePagination = () => {

    return (
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item className="active-page">{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>

          <Pagination.Ellipsis />

          <Pagination.Item>{9}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
    )

}

export default ArticlePagination