import { Button } from "@/components/ui/button";
import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/clerk-react";

export default function HeaderUser() {
	return (
		<>
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<SignInButton>
				<Button variant={'ghost'}>
				  Sign in
				</Button>
				</SignInButton>
			</SignedOut>
		</>
	);
}
