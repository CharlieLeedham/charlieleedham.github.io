AFRAME.registerComponent('work-item', {
    init: function () {
        var workItems = document.querySelectorAll('[work-item]');
        var workItemTitle = document.querySelectorAll('.work-item-title');

        // ID / Title / Description / Link
        var workArray = [
            ['#creodex', 'Creodex', 'Built Creodex for a Canadian client using \nNext.js, React, etc. It integrates GPT-powered assistants that filter OpenAI responses, \ngiving users expert insights before \nAI-generated answers.', 'creodex.com'],
            ['#morrisons', 'Morrisons Breakfast Kiosk', 'Contributed to the frontend development of \nthe Morrisons Cafe breakfast ordering kiosk \nusing React etc, delivering new features, bug \nfixes, and an intuitive touchscreen experience.', ''],
            ['#15gifts', 'Recommendation Engine', 'Maintained a recommendation engine for \nmajor telecom providers, including Vodafone, \nEE, and 02 using React etc. within large \ndevelopment teams using React and Redux to support a customer journey that recommend \nmobile devices based on user preferences.', ''],
            ['#editwebsites', 'Edit Websites', 'Contributed to the redesign and \nredevelopment of the companys page builder \ninto a modern website-building platform \ninspired by solutions such as Wix.', ''],
            ['#propeller', 'Propeller', 'Developed expertise in WordPress, SASS, and \nGit while maintaining a portfolio of WordPress \nwebsites, Worked within the companys development workflow to deliver website \nupdates and enhancements for clients, \nincluding Youngs pubs.', ''],
            ['#charlottesWeb', 'Charlotte\'s Web', 'My university dissertation project I worked \nwith a tattooist (Charlotte\'s Web) based in Northampton. Built a custom PHP system \nusing OOP and PDO where the client can \ntake bookings and upload portfolios.', '']
        ]

        this.el.addEventListener('click', getIndex);

        function getIndex(evt) {
            if (document.querySelector('[go-back]').getAttribute('visible') == false) {
                this.setAttribute('material', 'color: ')

                document.querySelector('#workItemsTitle').setAttribute('visible', 'false')
                document.querySelector('#selectedWorkTitle').setAttribute('visible', 'true')
                document.querySelector('#selectedWorkLink').setAttribute('visible', 'true')
                document.querySelector('#selectedWorkLink').setAttribute('can-countdown', 'true')
                document.querySelector('#selectedWorkDescription').setAttribute('visible', 'true')
                document.querySelector('[go-back]').setAttribute('visible', 'true')
                document.querySelector('[go-back]').setAttribute('can-countdown', 'true')

                for (var i = 0; i < workItemTitle.length; i++) {
                    workItemTitle[i].setAttribute('visible', 'false')
                }

                for (var i = 0; i < workItems.length; i++) {
                    if (workItems[i] == evt.target) {
                        document.querySelector('#selectedWorkTitle').setAttribute('text', 'value:' + workArray[i][1])
                        document.querySelector('#selectedWorkLink').setAttribute('text', 'value:' + workArray[i][3])
                        document.querySelector('#selectedWorkDescription').setAttribute('text', 'value:' + workArray[i][2])

                        for (var j = 0; j < workItems.length; j++) {
                            workItems[j].setAttribute('src', workArray[i][0] + j)
                        }
                    }
                    workItems[i].setAttribute('can-countdown', 'false')
                }
            }
        }

        this.el.addEventListener('mouseenter', function (evt) {
            if (document.querySelector('[go-back]').getAttribute('visible') == false) {
                this.setAttribute('material', 'color: #0077cc')
            }
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('material', 'color: ')
        });
    }
});

AFRAME.registerComponent('go-back', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            var workItems = document.querySelectorAll('[work-item]');
            var workItemTitle = document.querySelectorAll('.work-item-title');
            var workArray = ['#creodex0', '#morrisons0', '#15gifts0', '#editwebsites0', '#propeller0', '#charlottesWeb0']

            this.setAttribute('can-countdown', 'false')

            document.querySelector('#selectedWorkTitle').setAttribute('visible', 'false')
            document.querySelector('#selectedWorkLink').setAttribute('visible', 'false')
            document.querySelector('#selectedWorkLink').setAttribute('can-countdown', 'false')
            document.querySelector('#selectedWorkDescription').setAttribute('visible', 'false')
            document.querySelector('[go-back]').setAttribute('visible', 'false')
            document.querySelector('#workItemsTitle').setAttribute('visible', 'true')

            for (var i = 0; i < workItemTitle.length; i++) {
                workItemTitle[i].setAttribute('visible', 'true')
            }

            for (var i = 0; i < workItems.length; i++) {
                workItems[i].setAttribute('src', workArray[i])
                workItems[i].setAttribute('can-countdown', 'true')
            }
        });
        this.el.addEventListener('mouseenter', function (evt) {
            this.setAttribute('text', 'color:#0077cc')
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('text', 'color: grey')
        });
    }
});

AFRAME.registerComponent('a-link', {
    init: function () {
        var workItems = document.querySelectorAll('[a-link]');

        this.el.addEventListener('click', getIndex);

        function getIndex(evt) {
            for (let i = 0; i < workItems.length; i++) {
                if (workItems[i] == evt.target) {
                    document.getElementsByClassName('a_link')[i].click();
                }
            }
        }

        this.el.addEventListener('mouseenter', function (evt) {
            this.setAttribute('text', 'color: #0077cc')
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('text', 'color: grey')
        });
    }
})

AFRAME.registerComponent('selected-work-link', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            window.open('https://' + evt.target.components.text.data.value);
        });
        this.el.addEventListener('mouseenter', function (evt) {
            this.setAttribute('text', 'color: #0077cc')
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('text', 'color: grey')
        });
    }
})

AFRAME.registerComponent('countdown', {
    init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            if (this.getAttribute('can-countdown') == "true") {
                var timeLeft = 3;
                downloadTimer = setInterval(function () {
                    timeLeft--;
                    document.getElementById('countdown').setAttribute('text', { value: timeLeft });
                    if (timeLeft <= 0) {
                        document.getElementById('countdown').setAttribute('text', { value: '' });
                        clearInterval(downloadTimer);
                    }
                }, 480);

                document.getElementById('countdown').setAttribute('visible', 'true');
                document.getElementById('countdown').setAttribute('animation', 'property: scale; easing: easeInCubic; dur: 1500; from: 5 5 5; to: 3 3 3');
                document.getElementById('cursor').setAttribute('animation__fusing', 'property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 0.15 0.15 0.15; to: 0.1 0.1 0.1');
            }
        });
        this.el.addEventListener('mouseleave', function (evt) {
            clearInterval(downloadTimer)
            document.getElementById('countdown').removeAttribute('animation')
            document.getElementById('countdown').setAttribute('text', { value: 3 });
            document.getElementById('countdown').setAttribute('visible', 'false');
            document.getElementById('countdown').setAttribute('scale', '5 5 5');
            document.getElementById('cursor').removeAttribute('animation__fusing');
            document.getElementById('cursor').setAttribute('scale', '0.15 0.15 0.15');
        });
    }
});