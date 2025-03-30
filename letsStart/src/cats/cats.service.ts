import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

//* READ 고양이 전체 데이터 다 조회 -> GET
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* READ 특정 고양이 데이터 조회 -> GET
//* 동적 라우팅 (id를 변수처럼)
export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* CREATE 새로운 고양이 추가 -> POST
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); // c reate
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req: Request, res: Response) => {
  // 동적라우팅 필요 어떤 고양이인지 알아야하니까
  try {
    const params = req.params;
    const body = req.body;
    let result;
    // cat 에 대한 순회하면서 입력받은 파라미터의 id와 같은 idf찾기
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  // 동적라우팅 필요 어떤 고양이인지 알아야하니까
  try {
    const params = req.params;
    const body = req.body;
    let result;
    // cat 에 대한 순회하면서 입력받은 파라미터의 id와 같은 idf찾기
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body }; // 구조분해 할당
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
  // 동적라우팅 필요 어떤 고양이인지 알아야하니까
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id); // 새로운 db인 newCat으로 필터링
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
