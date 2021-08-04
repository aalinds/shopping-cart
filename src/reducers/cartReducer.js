import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from "../actions/action-types";

const initState = {
  items: [
    {
      id: "SKUCO40101001",
      name: "Monitor ",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/monitor.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 28,
      seq: 33,
      info: null,
      brand: "Samsung",
      weight: 8390,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "52",
      default_unit_id: 2,
      color_code: "#CBF0E1",
      quality_req: null,
    },
    {
      id: "SKUCO40101002",
      name: "CPU/Server",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/cpu.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 78,
      seq: 34,
      info: null,
      brand: "Sony",
      weight: 8390,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "53",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101003",
      name: "Laptops",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/laptop.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 59,
      seq: 31,
      info: null,
      brand: "Samsung",
      weight: 2410,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "60",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101004",
      name: "Printer/Scanner/Fax",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/printer.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 49,
      seq: 36,
      info: null,
      brand: "Samsung",
      weight: 34100,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "62",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101005",
      name: "UPS",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/ups.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 57,
      seq: 35,
      info: null,
      brand: "Sony",
      weight: 1900,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "63",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101006",
      name: "Mobile Phone - Feature Phone",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/mobile_feature_phone.jpg",
      category_id: "CO40101",
      is_active: false,
      price: 67,
      seq: 30,
      info: null,
      brand: "Sony",
      weight: 170,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "237",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101007",
      name: "Mobile Phone - Smartphone",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/mobile_smartphone.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 26,
      seq: 29,
      info: null,
      brand: "Samsung",
      weight: 170,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "238",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101008",
      name: "Tablet",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/tablet.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 45,
      seq: 47,
      info: null,
      brand: "Samsung",
      weight: 1050,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "243",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101009",
      name: "Desktop",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/desktop.jpg",
      category_id: "CO40101",
      is_active: false,
      price: 24,
      seq: 32,
      info: null,
      brand: "Sony",
      weight: 8390,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "247",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
    {
      id: "SKUCO40101010",
      name: "External Hard Drive",
      icon: "https://uzed.s3.amazonaws.com/recykal/icons/items/external_hard_drive.jpg",
      category_id: "CO40101",
      is_active: true,
      price: 120,
      seq: 37,
      info: null,
      brand: "Samsung",
      weight: 270,
      cgst_percentage: 2.5,
      hsn: "4707",
      sgst_percentage: 2.5,
      number_of_buyers: 4,
      modified_at: "2019-10-11 13:01:23",
      description: "",
      is_exchange_catalog: false,
      is_non_exchange_catalog: true,
      old_id: "251",
      default_unit_id: 2,
      color_code: null,
      quality_req: null,
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);

    // console.log(addedItem);

    let existed_item = state.addedItems.find((item) => action.id === item.id);

    // console.log(existed_item);

    if (existed_item) {
      addedItem.quantity += 1;

      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = (state.total += addedItem.price);

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  } else if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;

      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;

      return {
        ...state,
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
