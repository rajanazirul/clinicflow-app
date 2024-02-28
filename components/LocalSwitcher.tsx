// "use client";

// import { useLocale } from "next-intl";
// import { useRouter } from "next/navigation";
// import { ChangeEvent, useTransition } from "react";

// export default function LocalSwitcher() {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const localActive = useLocale();

//   const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const nextLocale = e.target.value;
//     startTransition(() => {
//       router.replace(`/${nextLocale}`);
//     });
//   };
//   return (
//     <select
//       className="select select-ghost w-full max-w-xs"
//       defaultValue={localActive}
//       onChange={onSelectChange}
//       disabled={isPending}
//     >
//       <option value="en">English</option>
//       <option value="my">Malaysia</option>
//     </select>
//   );
// }
