---
title: 'Contact'
layout: 'layouts/page.html'
---
<h2>{{title}}</h2>
<div class="flex-horizontal" id="contact">
    <section class="flex-vertical" style="gap:0.5rem;">
        <a href="" target="_blank" class="hvr-sweep-to-top"><i class="icon-linkedin"></i> linkedin <i class="bi bi-box-arrow-up-right"></i></a>
        <a href="" target="_blank" class="hvr-sweep-to-top"><i class="icon-itch"></i> itch.io <i class="bi bi-box-arrow-up-right"></i></a>
        <a href="" target="_blank" class="hvr-sweep-to-top"><i class="icon-artstation"></i> artstation <i class="bi bi-box-arrow-up-right"></i></a>
    </section>
    <section>
        <h3>Send me a message</h3>
        <form>
            <div class="flex-horizontal">
                <input name="name" placeholder="Your name">
                <input type="email" name="email" placeholder="Your email">
            </div>
            <textarea name="message" placeholder="Your message"></textarea>
            <br><button type="submit">Send</button>
        </form>
    </section>
</div>