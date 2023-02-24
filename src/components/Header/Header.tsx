import { flexCentered } from "~/styles/common.css";
import { SearchIcon } from "~/styles/icons/SearchIcon";
import { btn } from "~/styles/button.css";
import { headerWrapper, logoWrapper } from "./header.css";
import { useI18n } from "@solid-primitives/i18n";
import { ShoppingCart } from "~/styles/icons/ShoppingCart";
import { A } from "@solidjs/router";

export const Header = () => {
	const [t] = useI18n();

	return <div class={headerWrapper}>
		<A href='/' class={logoWrapper}>
			<img src="/images/logo.png" />
		</A>
		<div class={flexCentered} style={{ gap: "8px" }}>
			<button class={btn.plain}>
				<SearchIcon />
			</button>
			<button class={btn.black}>{t("categories")}</button>
			<button class={btn.plain}>{t("sort_by")}</button>
			<button class={btn.black}>{t("sign_in")}</button>
			<button class={btn.plain}>
				<ShoppingCart />
			</button>
		</div>
	</div>;
};