---
title: 방명록
lang: ko-KR
tags: ["guest", "comment", "visitor"]
---
<style>
    html.dark {
        color-scheme:none;
    }
</style>
<script>
    export default {
        mounted() {
            // Mutation Observer
            var target = document.querySelector('html');

            let observer = new MutationObserver((mutations) => {
                // 노드가 변경 됐을 때의 작업
                if (typeof window !== 'undefined' && window.DISQUS) {
                setTimeout(() => {
                    console.log('DISQUS is exists and try to load!')
                    window.DISQUS.reset({ reload: true })
                }, 180)
                }
            })

            // 감시자의 설정
            let option = {
                attributes: true,
            };

            // 대상 노드에 감시자 전달
            observer.observe(target, option);
        }
    }
</script>

# 방명록

<Disqus/>