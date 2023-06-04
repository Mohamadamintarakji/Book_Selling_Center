import styled from "styled-components";

const Wrapper = styled.article`
  button {
    background-color: #d10024;
    border: none;
  }
  .form-check-input:checked {
    background-color: #d10024;
    border: none;
  }
  .home-section {
    padding: 0;
    background-color: #f0f4f8;
    height: 100vh;
  }

  .dashboard-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: white;
    height: 85px;
    box-shadow: 8px 2px 6px #e9e9e9;
    padding: 0 60px;
  }
  .dashboard-nav button {
    width: 115px;
    position: relative;
    left: 1050px;
  }

  .dashboard-nav i {
    font-size: x-large;
  }
  .search-form {
    width: 400px;
    display: flex;
    position: relative;
  }
  .search-form i {
    position: absolute;
    left: 10px;
    top: 12px;
  }
  .input-style {
    border: 1px solid grey;
    box-shadow: 1px 2px 6px #e9e9e9;
    padding: 8px;
    border-radius: 8px;
    background-color: whitesmoke;
    border: none;
  }
  .control-side {
    width: 100%;
    background-color: white;
    padding: 10px 0 0 30px;
    box-shadow: 1px 2px 6px #e9e9e9;
    height: 100vh;
  }
  .admin-avatar {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .admin-avatar h5 {
    margin: 13px;
    color: #d10024;
  }
  .admin-avatar .logo {
    padding: 9px 13px;
    background-color: #d10024;
    color: white;
    font-size: 2pc;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .admin-avatar .logo i {
    color: white;
  }
  .control-list {
    margin-top: 50px;
    text-align: start;
    // font-size: 18px;
  }
  .control-list li span {
    margin-left: 12px;
    color: #d10024;
  }
  .col-style {
    border: none;
    background-color: white;
    border-color: none;
    border-radius: 8px;
    padding: 20px;
    border-collapse: inherit !important;
    height: 280px;
    position: relative;
  }
  .dash-home {
    border: none;
    background-color: white;
    border-color: none;
    border-radius: 8px;
    padding: 20px;
    border-collapse: inherit !important;
    height: auto;
    position: relative;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    border-bottom-color: #d10024;
  }
  .delete-section {
    position: absolute;
    right: 20px;
  }
  .edit-section {
    position: absolute;
    right: 50px;
    cursor: pointer;
  }
  /* .table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-accent-bg: none;
    color: var(--bs-table-striped-color);
} */
  .table {
    background-color: white;
    text-align: initial;
    border-radius: 8px;
    position: relative;
  }
  th,
  td {
    padding: 15px !important;
    text-align: start;
  }
  tr:hover {
    background-color: #edecec;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 10px;
    border-bottom-left-radius: 16px;
    margin-top: 5px;
    border-top-left-radius: 16px;
    color: black;
  }
  li:hover {
    background-color: #edecec;
  }
  p {
    margin: 0;
  }

  .editForm {
    margin-left: 50%;
    background-color: white;
    border-radius: 8px;
    width: 500px;
    padding: 35px 50px;
    transform: translate(-50%, 0%);
    position: fixed;
    top: 100px;
    left: 145px;
  }
`;

export default Wrapper;
