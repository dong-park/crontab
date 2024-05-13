import schedule from 'node-schedule';

// 매일 정오에 실행할 작업
const job = schedule.scheduleJob('0 12 * * *', function() {
    console.log('스케줄러가 작동합니다! 현재 시각:', new Date());
});

console.log('스케줄러 설정 완료. 작업이 정오에 실행됩니다.');
