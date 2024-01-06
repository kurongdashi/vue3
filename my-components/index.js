import { defineComponent, ref, mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderTeleport, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderSlotInner } from "vue/server-renderer";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  emits: ["onClick"],
  setup(__props, { emit: __emit }) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "btn" }, _attrs))} data-v-d1e50c41>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`按钮`);
      }, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Button.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d1e50c41"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "input",
        type: "text",
        value: __props.modelValue
      }, _attrs))} data-v-ae555240>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Input.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-ae555240"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const toggle = () => showModal.value = !showModal.value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="modal" style="${ssrRenderStyle(showModal.value ? null : { display: "none" })}" data-v-25d55598><div class="modal-box" data-v-25d55598><div class="title" data-v-25d55598>标题 <span class="close" data-v-25d55598>关闭</span></div><div class="content" data-v-25d55598>这里是弹出的内容</div><div class="footer" data-v-25d55598><button data-v-25d55598>确定</button><button data-v-25d55598>取消</button></div></div></div>`);
      }, "body", false, _parent);
      _push(ssrRenderComponent(Button, { onOnClick: toggle }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`点击弹出`);
          } else {
            return [
              createTextVNode("点击弹出")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Modal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-25d55598"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MySubTitle",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true,
      default: "标题1"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e4294108><div class="title" data-v-e4294108>${ssrInterpolate(props.title)}</div><div class="content" data-v-e4294108>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MySubTitle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MySubTitle = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e4294108"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MyTitle",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true,
      default: "标题1"
    },
    userInfo: {
      type: Object,
      // 对象类型的默认值，必须是一个函数返回值
      default(props) {
        return { name: "张三丰", age: 120, address: "武当山" };
      }
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title" }, _attrs))} data-v-bac5407a>${ssrInterpolate(props.title)} <span class="account" data-v-bac5407a>当前账号：<span class="name" data-v-bac5407a>${ssrInterpolate(props.userInfo.name)}</span></span></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MyTitle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MyTitle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-bac5407a"]]);
const _sfc_main$3 = {
  __name: "MyTransition",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MyTransition.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MyTransition = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-faa97974"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-20f740b5><div class="header" data-v-20f740b5>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</div><div class="content" data-v-20f740b5><div data-v-20f740b5>`);
      ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
      _push(`</div><div data-v-20f740b5>`);
      ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Page.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Page = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-20f740b5"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Provider",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("hello");
    const text = ref("world");
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {
        value: value.value,
        text: text.value
      }, null, _push, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Provider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UpcaseInput",
  __ssrInlineRender: true,
  props: {
    title: String,
    // titleModifiers 如果有参数，修饰符也同步修改，无参数时默认为modelModifiers
    titleModifiers: {
      default: () => ({})
    }
  },
  emits: ["update:title"],
  setup(__props, { emit: __emit }) {
    const isFocus = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: ["input", { focus: isFocus.value }],
        value: __props.title
      }, _attrs))} data-v-3c4677f7>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UpcaseInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UpcaseInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c4677f7"]]);
export {
  Button,
  Input,
  Modal,
  MySubTitle,
  MyTitle,
  MyTransition,
  Page,
  _sfc_main$1 as Provider,
  UpcaseInput
};
