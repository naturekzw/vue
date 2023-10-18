import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import dayjs from 'dayjs';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, editing, form } from './Chirp.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Dropdown', typeof __VLS_localComponents, "Dropdown", "Dropdown", "Dropdown"> &
__VLS_WithComponent<'DropdownLink', typeof __VLS_localComponents, "DropdownLink", "DropdownLink", "DropdownLink"> &
__VLS_WithComponent<'InputError', typeof __VLS_localComponents, "InputError", "InputError", "InputError"> &
__VLS_WithComponent<'PrimaryButton', typeof __VLS_localComponents, "PrimaryButton", "PrimaryButton", "PrimaryButton">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).svg; ({} as __VLS_IntrinsicElements).svg; ({} as __VLS_IntrinsicElements).svg; ({} as __VLS_IntrinsicElements).svg;
({} as __VLS_IntrinsicElements).path; ({} as __VLS_IntrinsicElements).path;
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small; ({} as __VLS_IntrinsicElements).small;
__VLS_components.Dropdown; __VLS_components.Dropdown;
// @ts-ignore
[Dropdown, Dropdown,];
({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
__VLS_components.DropdownLink; __VLS_components.DropdownLink;
// @ts-ignore
[DropdownLink, DropdownLink,];
({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).textarea; ({} as __VLS_IntrinsicElements).textarea;
__VLS_components.InputError;
// @ts-ignore
[InputError,];
__VLS_components.PrimaryButton; __VLS_components.PrimaryButton;
// @ts-ignore
[PrimaryButton, PrimaryButton,];
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, class: ("p-6 flex space-x-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("p-6 flex space-x-2"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["svg"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).svg;
({} as __VLS_IntrinsicElements).svg;
const __VLS_7 = __VLS_6({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), class: ("h-6 w-6 text-gray-600 -scale-x-100"), fill: ("none"), viewBox: ("0 0 24 24"), stroke: ("currentColor"), strokeWidth: ("2"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), class: ("h-6 w-6 text-gray-600 -scale-x-100"), fill: ("none"), viewBox: ("0 0 24 24"), stroke: ("currentColor"), strokeWidth: ("2"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as __VLS_IntrinsicElements)["path"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
({} as __VLS_IntrinsicElements).path;
const __VLS_12 = __VLS_11({ ...{}, strokeLinecap: ("round"), strokeLinejoin: ("round"), d: ("M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, strokeLinecap: ("round"), strokeLinejoin: ("round"), d: ("M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_17 = __VLS_16({ ...{}, class: ("flex-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("flex-1"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_22 = __VLS_21({ ...{}, class: ("flex justify-between items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("flex justify-between items-center"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_32 = __VLS_31({ ...{}, class: ("text-gray-800"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("text-gray-800"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_ctx.chirp.user.name);
(__VLS_33.slots!).default;
}
{
const __VLS_35 = ({} as __VLS_IntrinsicElements)["small"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
({} as __VLS_IntrinsicElements).small;
({} as __VLS_IntrinsicElements).small;
const __VLS_37 = __VLS_36({ ...{}, class: ("ml-2 text-sm text-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, class: ("ml-2 text-sm text-gray-600"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
(new Date(__VLS_ctx.chirp.created_at).toLocaleString());
(__VLS_38.slots!).default;
}
{
const __VLS_40 = ({} as __VLS_IntrinsicElements)["small"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
({} as __VLS_IntrinsicElements).small;
({} as __VLS_IntrinsicElements).small;
const __VLS_42 = __VLS_41({ ...{}, class: ("ml-2 text-sm text-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("ml-2 text-sm text-gray-600"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_ctx.dayjs(__VLS_ctx.chirp.created_at).fromNow());
(__VLS_43.slots!).default;
}
if (__VLS_ctx.chirp.created_at !== __VLS_ctx.chirp.updated_at) {
{
const __VLS_45 = ({} as __VLS_IntrinsicElements)["small"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
({} as __VLS_IntrinsicElements).small;
({} as __VLS_IntrinsicElements).small;
const __VLS_47 = __VLS_46({ ...{}, class: ("text-sm text-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("text-sm text-gray-600"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
(__VLS_48.slots!).default;
}
// @ts-ignore
[chirp, chirp, dayjs, chirp, chirp, chirp,];
}
(__VLS_28.slots!).default;
}
if (__VLS_ctx.chirp.user.id === __VLS_ctx.$page.props.auth.user.id) {
{
let __VLS_50!: 'Dropdown' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Dropdown : (typeof __VLS_resolvedLocalAndGlobalComponents)['Dropdown'];
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, }));
({} as { Dropdown: typeof __VLS_50; }).Dropdown;
({} as { Dropdown: typeof __VLS_50; }).Dropdown;
const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
const __VLS_55 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_57 = __VLS_56({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_53.slots!).trigger;
{
const __VLS_58 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_60 = __VLS_59({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_59));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_58, typeof __VLS_60> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60)!;
let __VLS_62!: __VLS_NormalizeEmits<typeof __VLS_61.emit>;
{
const __VLS_63 = ({} as __VLS_IntrinsicElements)["svg"];
const __VLS_64 = __VLS_elementAsFunctionalComponent(__VLS_63);
({} as __VLS_IntrinsicElements).svg;
({} as __VLS_IntrinsicElements).svg;
const __VLS_65 = __VLS_64({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), class: ("h-4 w-4 text-gray-400"), viewBox: ("0 0 20 20"), fill: ("currentColor"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_63, typeof __VLS_65> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), class: ("h-4 w-4 text-gray-400"), viewBox: ("0 0 20 20"), fill: ("currentColor"), });
const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65)!;
let __VLS_67!: __VLS_NormalizeEmits<typeof __VLS_66.emit>;
{
const __VLS_68 = ({} as __VLS_IntrinsicElements)["path"];
const __VLS_69 = __VLS_elementAsFunctionalComponent(__VLS_68);
({} as __VLS_IntrinsicElements).path;
const __VLS_70 = __VLS_69({ ...{}, d: ("M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_68, typeof __VLS_70> & Record<string, unknown>) => void)({ ...{}, d: ("M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"), });
const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70)!;
let __VLS_72!: __VLS_NormalizeEmits<typeof __VLS_71.emit>;
}
(__VLS_66.slots!).default;
}
(__VLS_61.slots!).default;
}
}
}
{
const __VLS_73 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_74 = __VLS_elementAsFunctionalComponent(__VLS_73);
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_75 = __VLS_74({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_74));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_73, typeof __VLS_75> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_53.slots!).content;
{
const __VLS_76 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_78 = __VLS_77({ ...{ onClick: {} as any, }, class: ("block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
let __VLS_81 = { 'click': __VLS_pickEvent(__VLS_80['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_78>).onClick) };
__VLS_81 = {
click: $event => {
if (!((__VLS_ctx.chirp.user.id === __VLS_ctx.$page.props.auth.user.id))) return;
__VLS_ctx.editing = true;
}
};
(__VLS_79.slots!).default;
}
{
let __VLS_82!: 'DropdownLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.DropdownLink : (typeof __VLS_resolvedLocalAndGlobalComponents)['DropdownLink'];
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{}, as: ("button"), href: ((__VLS_ctx.route('chirps.destroy', __VLS_ctx.chirp.id))), method: ("delete"), }));
({} as { DropdownLink: typeof __VLS_82; }).DropdownLink;
({} as { DropdownLink: typeof __VLS_82; }).DropdownLink;
const __VLS_84 = __VLS_83({ ...{}, as: ("button"), href: ((__VLS_ctx.route('chirps.destroy', __VLS_ctx.chirp.id))), method: ("delete"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, as: ("button"), href: ((__VLS_ctx.route('chirps.destroy', __VLS_ctx.chirp.id))), method: ("delete"), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
(__VLS_85.slots!).default;
}
}
}
}
// @ts-ignore
[chirp, $page, editing, route, chirp, route, chirp, route, chirp,];
}
(__VLS_23.slots!).default;
}
if (__VLS_ctx.editing) {
{
const __VLS_87 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_88 = __VLS_elementAsFunctionalComponent(__VLS_87);
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_89 = __VLS_88({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
let __VLS_92 = { 'submit': __VLS_pickEvent(__VLS_91['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_88, typeof __VLS_89>).onSubmit) };
__VLS_92 = {
submit: $event => {
if (!((__VLS_ctx.editing))) return;
__VLS_ctx.form.put(__VLS_ctx.route('chirps.update', __VLS_ctx.chirp.id), { onSuccess: () => __VLS_ctx.editing = false });
}
};
{
const __VLS_93 = ({} as __VLS_IntrinsicElements)["textarea"];
const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93);
({} as __VLS_IntrinsicElements).textarea;
({} as __VLS_IntrinsicElements).textarea;
const __VLS_95 = __VLS_94({ ...{}, value: ((__VLS_ctx.form.message)), class: ("mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_93, typeof __VLS_95> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.form.message)), class: ("mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"), });
const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95)!;
let __VLS_97!: __VLS_NormalizeEmits<typeof __VLS_96.emit>;
}
{
let __VLS_98!: 'InputError' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.InputError : (typeof __VLS_resolvedLocalAndGlobalComponents)['InputError'];
const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ ...{}, message: ((__VLS_ctx.form.errors.message)), class: ("mt-2"), }));
({} as { InputError: typeof __VLS_98; }).InputError;
const __VLS_100 = __VLS_99({ ...{}, message: ((__VLS_ctx.form.errors.message)), class: ("mt-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_98, typeof __VLS_100> & Record<string, unknown>) => void)({ ...{}, message: ((__VLS_ctx.form.errors.message)), class: ("mt-2"), });
const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100)!;
let __VLS_102!: __VLS_NormalizeEmits<typeof __VLS_101.emit>;
}
{
const __VLS_103 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_105 = __VLS_104({ ...{}, class: ("space-x-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_105> & Record<string, unknown>) => void)({ ...{}, class: ("space-x-2"), });
const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105)!;
let __VLS_107!: __VLS_NormalizeEmits<typeof __VLS_106.emit>;
{
let __VLS_108!: 'PrimaryButton' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.PrimaryButton : (typeof __VLS_resolvedLocalAndGlobalComponents)['PrimaryButton'];
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ ...{}, class: ("mt-4"), }));
({} as { PrimaryButton: typeof __VLS_108; }).PrimaryButton;
({} as { PrimaryButton: typeof __VLS_108; }).PrimaryButton;
const __VLS_110 = __VLS_109({ ...{}, class: ("mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{}, class: ("mt-4"), });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
(__VLS_111.slots!).default;
}
{
const __VLS_113 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_115 = __VLS_114({ ...{ onClick: {} as any, }, class: ("mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_113, typeof __VLS_115> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("mt-4"), });
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>;
let __VLS_118 = { 'click': __VLS_pickEvent(__VLS_117['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_114, typeof __VLS_115>).onClick) };
__VLS_118 = {
click: $event => {
if (!((__VLS_ctx.editing))) return;
__VLS_ctx.editing = false; __VLS_ctx.form.reset(); __VLS_ctx.form.clearErrors();
}
};
(__VLS_116.slots!).default;
}
(__VLS_106.slots!).default;
}
(__VLS_90.slots!).default;
}
// @ts-ignore
[editing, form, route, chirp, editing, form, form, form, form, form, editing, form, form,];
}
else {
{
const __VLS_119 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_120 = __VLS_elementAsFunctionalComponent(__VLS_119);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_121 = __VLS_120({ ...{}, class: ("mt-4 text-lg text-gray-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_120));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_121> & Record<string, unknown>) => void)({ ...{}, class: ("mt-4 text-lg text-gray-900"), });
const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121)!;
let __VLS_123!: __VLS_NormalizeEmits<typeof __VLS_122.emit>;
(__VLS_ctx.chirp.message);
(__VLS_122.slots!).default;
}
// @ts-ignore
[chirp,];
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
