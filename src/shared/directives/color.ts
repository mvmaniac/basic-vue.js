import type { DirectiveBinding } from 'vue';

export default function color(el: HTMLElement, binding: DirectiveBinding) {
  el.style.color = binding.value as string;
}
