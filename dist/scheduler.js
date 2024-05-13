"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schedule_1 = __importDefault(require("node-schedule"));
// 매일 정오에 실행할 작업
const job = node_schedule_1.default.scheduleJob('* * * * *', function () {
    console.log('스케줄러가 작동합니다! 현재 시각:', new Date());
});
console.log('스케줄러 설정 완료. 작업이 정오에 실행됩니다.');
