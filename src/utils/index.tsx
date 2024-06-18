import { ProductListProps } from "@/@types/cart";
interface IDataRender {
  amaount: number;
  data: ProductListProps;
  id: string;
  quantity: number;
}
export const groupBy = (array: any, key: string) => {
  return array.reduce((result: any, currentItem: any) => {
    if (!result[currentItem[key]]) {
      result[currentItem[key]] = [];
    }
    result[currentItem[key]].push(currentItem);
    return result;
  }, {});
};
export const getDataRenderGroup = (dataCart: ProductListProps[]) => {
  const groupedData = groupBy(dataCart, "id");

  let dataRender = [] as IDataRender[];

  Object.keys(groupedData).forEach((key) => {
    dataRender.push({
      id: key,
      data: groupedData[key].find((item: any) => !!item),
      amaount: 0,
      quantity: groupedData[key].length,
    });
  });
  return dataRender;
};
