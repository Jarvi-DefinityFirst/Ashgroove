import{b as O}from"./chunk-SGLDCAUN.js";import{Da as D,Fa as V,G as k,T as M,U as L,X as z,d as b,v as E,w as H,x as I,z as B}from"./chunk-X6SMWKVA.js";import"./chunk-KQATVZ4O.js";import"./chunk-4PPJG5BB.js";import{$b as p,Cb as T,Db as w,Eb as A,Fb as r,Gb as t,Hb as n,Ib as s,Mb as h,Pb as v,Qa as d,Rb as m,Ua as a,ba as y,db as S,ec as e,gc as C,ha as u,ia as f,jb as l}from"./chunk-4SEB7VVV.js";import"./chunk-DRSDQDGF.js";function F(i,c){if(i&1){let o=h();e(0,`
                `),t(1,"button",18),v("click",function(){u(o),m();let g=p(22);return f(g.toggleItem())}),e(2,`
                  Accordion item #0
                `),n(),e(3,`
              `)}if(i&2){m();let o=p(22);a(),r("collapsed",!o.visible)}}function j(i,c){if(i&1&&(e(0,`
                `),s(1,"div",19),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),d)("gradient",!0)}}function P(i,c){if(i&1){let o=h();e(0,`
                `),t(1,"button",20),v("click",function(){u(o),m();let g=p(30);return f(g.toggleItem())}),e(2,`
                  Accordion item #1
                `),n(),e(3,`
              `)}if(i&2){m();let o=p(30);a(),r("collapsed",!o.visible)}}function N(i,c){i&1&&(e(0,`
                `),t(1,"div",21),e(2,`
                  `),t(3,"strong"),e(4,`This is the
                    `),t(5,"mark"),e(6,"#second"),n(),e(7,`
                    item accordion body.`),n(),e(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),t(9,"code"),e(10,".accordion-body"),n(),e(11,`,
                  though the transition does limit overflow.
                `),n(),e(12,`
              `))}function Y(i,c){if(i&1){let o=h();e(0,`
                `),t(1,"button",20),v("click",function(){u(o),m();let g=p(38);return f(g.toggleItem())}),e(2,`
                  Accordion item #2
                `),n(),e(3,`
              `)}if(i&2){m();let o=p(38);a(),r("collapsed",!o.visible)}}function R(i,c){if(i&1&&(e(0,`
                `),t(1,"div",21),e(2,`
                  `),s(3,"span",22),e(4,`
                `),n(),e(5,`
              `)),i&2){let o=m();a(3),r("innerHTML",o.getAccordionBodyText("third"),d)}}function q(i,c){i&1&&e(0,`
                Accordion item #0
              `)}function G(i,c){if(i&1&&(e(0,`
                `),s(1,"span",22),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("first"),d)}}function J(i,c){i&1&&e(0,`
                Accordion item #1
              `)}function K(i,c){if(i&1&&(e(0,`
                `),s(1,"span",22),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("second"),d)}}function Q(i,c){i&1&&e(0,`
                Accordion item #2
              `)}function U(i,c){if(i&1&&(e(0,`
                `),s(1,"span",22),e(2,`
              `)),i&2){let o=m();a(),r("innerHTML",o.getAccordionBodyText("third"),d)}}function W(i,c){if(i&1&&e(0),i&2){let o=m().$index;C(`
                  Custom Accordion item #`,o,`
                `)}}function X(i,c){if(i&1&&(e(0,`
                  `),t(1,"small")(2,"i"),e(3),n()(),e(4,`
                  `),s(5,"span",22),e(6,`
                `)),i&2){let o=m().$index,x=m();a(3),C("",o,"."),a(2),r("innerHTML",x.getAccordionBodyText(o),d)}}function Z(i,c){if(i&1&&(e(0,`
              `),t(1,"c-accordion-item",8),e(2,`
                `),l(3,W,1,1,"ng-template",14),e(4,`
                `),l(5,X,7,2,"ng-template",15),e(6,`
              `),n(),e(7,`
            `)),i&2){let o=c.$index;a(),r("visible",o===1)}}var _=class _{constructor(){this.sanitizer=y(b);this.items=[1,2,3,4]}getAccordionBodyText(c){let o=`
      <strong>This is the <mark>#${c}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}};_.\u0275fac=function(o){return new(o||_)},_.\u0275cmp=S({type:_,selectors:[["app-accordions"]],decls:124,vars:5,consts:[["item0","cAccordionItem"],["item1","cAccordionItem"],["item2","cAccordionItem"],["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/accordion"],[1,"shadow","rounded-2",3,"alwaysOpen"],[3,"visible"],["cTemplateId","accordionHeaderTemplate"],["cTemplateId","accordionBodyTemplate"],["href","components/accordion#flush"],[3,"flush"],["visible",""],["cTemplateId","accordionHeader"],["cTemplateId","accordionBody"],["href","components/accordion#always-open"],["alwaysOpen","",1,"shadow","accordion-custom","rounded-2"],["cAccordionButton","","cBgColor","info",3,"click","collapsed"],["cBgColor","info",1,"accordion-body",3,"innerHTML","gradient"],["cAccordionButton","",3,"click","collapsed"],[1,"accordion-body"],[3,"innerHTML"]],template:function(o,x){o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",3),e(3,`
    `),t(4,"c-card",4),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular Accordion"),n(),e(10,`
      `),n(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"p",5),e(15,`
          Click the accordions below to expand/collapse the accordion content.
        `),n(),e(16,`
        `),t(17,"app-docs-example",6),e(18,`
          `),t(19,"c-accordion",7),e(20,`
            `),t(21,"c-accordion-item",8,0),e(23,`
              `),l(24,F,4,1,"ng-template",9),e(25,`
              `),l(26,j,3,2,"ng-template",10),e(27,`
            `),n(),e(28,`
            `),t(29,"c-accordion-item",8,1),e(31,`
              `),l(32,P,4,1,"ng-template",9),e(33,`
              `),l(34,N,13,0,"ng-template",10),e(35,`
            `),n(),e(36,`
            `),t(37,"c-accordion-item",8,2),e(39,`
              `),l(40,Y,4,1,"ng-template",9),e(41,`
              `),l(42,R,6,1,"ng-template",10),e(43,`
            `),n(),e(44,`
          `),n(),e(45,`
        `),n(),e(46,`
      `),n(),e(47,`
    `),n(),e(48,`
    `),t(49,"c-card",4),e(50,`
      `),t(51,"c-card-header"),e(52,`
        `),t(53,"strong"),e(54,"Angular Accordion"),n(),e(55,` flush
      `),n(),e(56,`
      `),t(57,"c-card-body"),e(58,`
        `),t(59,"p",5),e(60,`
          Add `),t(61,"code"),e(62,"flush"),n(),e(63," to remove the default "),t(64,"code"),e(65,"background-color"),n(),e(66,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),n(),e(67,`
        `),t(68,"app-docs-example",11),e(69,`
          `),t(70,"c-accordion",12),e(71,`
            `),t(72,"c-accordion-item",13),e(73,`
              `),l(74,q,1,0,"ng-template",14),e(75,`
              `),l(76,G,3,1,"ng-template",15),e(77,`
            `),n(),e(78,`
            `),t(79,"c-accordion-item"),e(80,`
              `),l(81,J,1,0,"ng-template",14),e(82,`
              `),l(83,K,3,1,"ng-template",15),e(84,`
            `),n(),e(85,`
            `),t(86,"c-accordion-item"),e(87,`
              `),l(88,Q,1,0,"ng-template",14),e(89,`
              `),l(90,U,3,1,"ng-template",15),e(91,`
            `),n(),e(92,`
          `),n(),e(93,`
        `),n(),e(94,`
      `),n(),e(95,`
    `),n(),e(96,`
    `),t(97,"c-card",4),e(98,`
      `),t(99,"c-card-header"),e(100,`
        `),t(101,"strong"),e(102,"Angular Accordion"),n(),e(103,` alwaysOpen
      `),n(),e(104,`
      `),t(105,"c-card-body"),e(106,`
        `),t(107,"p",5),e(108,`
          Add `),t(109,"code"),e(110,"alwaysOpen"),n(),e(111,` property to make accordion items stay open when another
          item is opened.
        `),n(),e(112,`
        `),t(113,"app-docs-example",16),e(114,`
          `),t(115,"c-accordion",17),e(116,`
            `),w(117,Z,8,1,null,null,T),n(),e(119,`
        `),n(),e(120,`
      `),n(),e(121,`
    `),n(),e(122,`
  `),n(),e(123,`
`),n()),o&2&&(a(19),r("alwaysOpen",!1),a(2),r("visible",!1),a(8),r("visible",!1),a(8),r("visible",!1),a(33),r("flush",!0),a(47),A(x.items))},dependencies:[V,D,M,z,L,O,I,B,E,H,k],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--cui-dark);color:var(--cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]});var $=_;export{$ as AccordionsComponent};
