import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WrapperCard from "./WrapperCard";

const WithSanPham = WrapperCard(NhanVien);

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <WithSanPham />
      </div>
    );
  }
}
