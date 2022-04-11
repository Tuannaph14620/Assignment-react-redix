import React from 'react'

const CheckOut = () => {
  return (
   <main>
  <div className="bbt">
    <img src="../../img/224.jpg" alt />
    <h1 style={{textAlign: 'center', marginBottom: 60}}>Đặt Hàng Thành Công</h1>
  </div>
  <div className="div">
    <section className="buton7">
      <p> <strong>Mã đơn hàng : </strong>${'{'}data.id{'}'}</p> <br />
      <p> <strong>Tên : </strong>${'{'}data.firstName{'}'}${'{'}data.firstName{'}'}</p><br />
      <p><strong>Địa Chỉ : </strong>${'{'}post.address{'}'} - ${'{'}post.district{'}'} - ${'{'}post.city{'}'}</p> <br />
      <p><strong>SĐT : </strong>${'{'}data.phone{'}'}</p> <br />
      <p><strong>Phương thức giao hàng : </strong>${'{'}post.ptgh == 0 ? "Standard" : "Express"{'}'}</p> <br />
      <p><strong>Tổng đơn hàng : </strong></p>
      <br />
    </section>
    <section className="div1">
      <table style={{width: '90%'}}>
        <tbody><tr className="color">
            <th>Tên sản phẩm</th>
            <th>Giá sản phẩm</th>
            <th>Size</th>
            <th>Số Lượng</th>
          </tr>
          {/*?php foreach ($listdonhang1 as $dh) : ?*/}
          <tr className="th">
            <td>{/*?=$dh['name']?*/}</td>
            <td>{/*?= number_format($dh['price']) ?*/}vnđ</td>
            <td>{/*?=$dh['size']?*/}</td>
            <td>{/*?=$dh['quantity']?*/}</td>
          </tr>
          {/*?php endforeach; ?*/}
        </tbody></table>
    </section>
  </div>
  <section className="bbv">
    <h3>Chúng tôi sẽ liên hệ với sớm nhất, sau khi nhận được đơn đặt hàng này</h3>
    <h5> Mọi thắc mắc xin vui lòng liên hệ:</h5>
    <span>Lầu M, Toà nhà Petroland, 12 Tân Trào, P. Tân Phú, Q.7, Tp. Hồ Chí Minh <br />
      Tel: +84 28 54147667 <br />
      Fax:+84 28 54147557</span>
  </section>
  <section className="button3">
    <a href="index.php">Trở về trang chủ</a>
    <a href="index.php?act=tc">Tiếp tục mua sắm</a>
  </section>
</main>

  )
}

export default CheckOut