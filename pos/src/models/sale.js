export class saleHeader {
    id = ''
    voucherNo = ''
    customer = ''
    paymetnType = 1
    totalAmount = ''
    totalQty = ''
    startAt = new Date()
    endAt = new Date()
  constructor(
    // id = '',
    // voucherNo = '',
    // customer = '',
    // paymetnType = 1,
    // totalAmount = '',
    // totalQty = '',
    // startAt = new Date(),
    // endAt = new Date(),
  ) {
      // this.id = id
      // this.voucherNo = voucherNo
      // this.paymetnType = paymetnType
    }
}

export class saleData {
  id = ''
  voucherNo = ''
  customer = ''
  paymetnType = 1
  totalAmount = ''
  totalQty = ''
  startAt = new Date()
  endAt = new Date()
  detail = []
  constructor(
    // id = '',
    // voucherNo = '',
    // customer = '',
    // paymetnType = 1,
    // totalAmount = '',
    // totalQty = '',
    // startAt = new Date(),
    // endAt = new Date(),
    // detail = []
  ){
    
  }
}

export class saleDetail {
  id = ''
  stockCode = ''
  price =  0
  qty = 0
  total = 0
  constructor(
    // id = '',
    // stockCode = '',
    // price =  0,
    // qty = 0,
    // total = 0
  ) {
    // this.id = id
  }
}